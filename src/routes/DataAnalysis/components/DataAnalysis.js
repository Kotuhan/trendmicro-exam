import React from 'react'
import './DataAnalysis.scss'
import Chart from '../../../components/Chart'
import classNames from 'classnames'
import InfiniteTree from 'react-infinite-tree'
import 'react-infinite-tree/dist/react-infinite-tree.css'


// <Chart />
export const DataAnalysis = () => (
  <div className='container'>
    <div className='header'>
      Data Analysis
    </div>
    <hr className='devider' />
    <App />
  </div>
)

class App extends React.Component {
    tree = null;

    componentDidMount() {
        this.tree.loadData(data);

        // Select the first node
        //this.tree.selectNode(this.tree.getChildNodes()[0]);
    }
    render() {
        return (
            <div>
                <InfiniteTree
                    ref={(c) => this.tree = c.tree}
                    autoOpen={false}
                    loadNodes={(parentNode, done) => {
                        const suffix = parentNode.id.replace(/(\w)+/, '');
                        const nodes = [
                            {
                                id: 'node1' + suffix,
                                name: 'Node 1'
                            },
                            {
                                id: 'node2' + suffix,
                                name: 'Node 2'
                            }
                        ];
                        setTimeout(() => {
                            done(null, nodes);
                        }, 1000);
                    }}
                  rowRenderer={(node, treeOptions) => {
                    const { id, loadOnDemand = false, state, props = {} } = node
                    const droppable = treeOptions.droppable
                    const { depth, open, checked = false } = state
                    const more = node.hasChildren()
                    let style
                    if (checked === 'partial') {
                      style = 'partial'
                    } else {
                      style = checked ? 'checked' : 'unchecked'
                    }

                    return (
                      <div
                        className={classNames(
                            'infinite-tree-item',
                            { 'infinite-tree-selected': checked }
                        )}
                        data-id={id}
                        droppable={droppable}
                      >
                        <div
                          className="infinite-tree-node"
                          style={{ marginLeft: depth * 18 }}
                        >
                          {!more && loadOnDemand &&
                            <a className={classNames(treeOptions.togglerClass, 'infinite-tree-closed')}>►</a>
                          }
                          {more && open &&
                            <a className={classNames(treeOptions.togglerClass)}>▼</a>
                          }
                          {more && !open &&
                            <a className={classNames(treeOptions.togglerClass, 'infinite-tree-closed')}>►</a>
                          }
                          <input
                            type='checkbox'
                            checked={checked}
                            style={{ color: 'red' }}
                            />
                          {
                            style
                          }
                          <span className='infinite-tree-title'>{props.label}</span>
                        </div>
                      </div>
                    )
                  }}
                  selectable
                  shouldSelectNode={(rootNode) => {
                    const more = rootNode.hasChildren()

                    const recursiveUpdate = (node) => {
                      const more = node.hasChildren()

                      node.state.checked = rootNode.state.checked
                      if (more) {
                        node.state.checkedChildren = node.state.checked
                        ? node.children.length
                        : 0

                        node.children.forEach(child => {
                          recursiveUpdate(child)
                        })
                      }
                    }

                    if (
                        rootNode.state.checked === 'partial' ||
                        rootNode.state.checked === false ||
                        rootNode.state.checked === undefined
                        ) {
                      rootNode.state.checked = true
                      if (more) rootNode.state.checkedChildren = rootNode.children.length - 1
                    } else {
                      rootNode.state.checked = false
                      if (more) rootNode.state.checkedChildren = 0
                    }

                    if (more) {
                      recursiveUpdate(rootNode)
                    }

                    const changeParentChecked = (parent) => {
                      const childrenLength = parent.children.length
                      let checkedChildren = 0
                      parent.children.forEach((child) => {
                        if (child.state.checked) checkedChildren++
                      })

                      console.log('parent.children', parent.children);
                      console.log('checkedChildren', checkedChildren);

                      let checked
                      // console.log('checkedChildren', checkedChildren);

                      // console.log('childrenLength', childrenLength);

                      if (checkedChildren > 0 && checkedChildren < childrenLength) {
                        checked = 'partial'
                      } else if (checkedChildren === 0) {
                        checked = false
                      } else {
                        checked = true
                      }

                      return checked
                    }

                    const recursiveParentChange = (parent, child) => {
                      parent.state.checked = changeParentChecked(parent)
                      this.tree.updateNode(parent)
                      if (parent.state.depth !== 0) recursiveParentChange(parent.parent, parent)
                    }

                    if (rootNode.state.depth !== 0) {
                      recursiveParentChange(rootNode.parent, rootNode)
                    } else {
                      this.tree.updateNode(rootNode)
                    }
                    return false
                  }}
                  onClick={(event) => {
                  //  const target = event.target || event.srcElement; // IE8
                  //  console.log('click:', target);
                  }}
                  onDoubleClick={(event) => {
                    // console.log('double click:', target)
                  }}
                  onOpenNode={(node) => {
                    console.log('open node:', node)
                  }}
                  onCloseNode={(node) => {
                    console.log('close node:', node)
                  }}
                  onSelectNode={(node) => {
                    console.log('select node:', node)
                  }}
                  onClusterWillChange={() => {
                  }}
                  onClusterDidChange={() => {
                  }}
                  onContentWillUpdate={() => {
                  }}
                  onContentDidUpdate={() => {
                  }}
                />
            </div>
        )
    }
}

DataAnalysis.propTypes = {
}

const data = {
    "id": "root",
    "props": {
        "label": "Predefined File Extensions"
    },
    "children": [
        {
            "id": "node.0",
            "props": {
                "label": "Application and executables"
            },
            "children": [
                {
                    "id": "node.0.0",
                    "props": {
                        "label": "Executable and Linking Format (.elf)"
                    },
                    "children": [
                      {
                        "id": "node.0.0",
                        "props": {
                            "label": "dfadsfasdfsadfsdafddsafadsd"
                        }
                      }
                    ]
                },
                {
                    "id": "node.0.1",
                    "props": {
                        "label": "Executable (.exe; .dll; .vxd)"
                    }
                },
                {
                    "id": "node.0.2",
                    "props": {
                        "label": "JAVA Applet (.class)"
                    }
                },
                {
                    "id": "node.0.3",
                    "props": {
                        "label": "Windows Shell Link (.lnk)"
                    }
                },
                {
                    "id": "node.0.4",
                    "props": {
                        "label": "Windows Installer Package (.msi)"
                    }
                }
            ]
        },
        {
            "id": "node.1",
            "props": {
                "label": "Documents"
            },
            "children": [
                {
                    "id": "node.1.0",
                    "props": {
                        "label": "Documents"
                    }
                },
                {
                    "id": "node.1.1",
                    "props": {
                        "label": "Adobe Portable Document Format (.pdf)"
                    }
                },
                {
                    "id": "node.1.2",
                    "props": {
                        "label": "Compiled HTML Help (.chm)"
                    }
                },
                {
                    "id": "node.1.3",
                    "props": {
                        "label": "Macros in MS Office compressed by ActiveMime (.mso)"
                    }
                },
                {
                    "id": "node.1.4",
                    "props": {
                        "label": "Microsoft Access (.mdb; .accdb)"
                    }
                },
                {
                    "id": "node.1.5",
                    "props": {
                        "label": "Microsoft Excel (.xls; .xlt)"
                    }
                },
                {
                    "id": "node.1.6",
                    "props": {
                        "label": "Microsoft Office Excel 2007 (.xlsx; .xlsm; .xltx; .xltm; .xlsb; .xlam)"
                    }
                },
                {
                    "id": "node.1.7",
                    "props": {
                        "label": "Microsoft Office PowerPoint 2007 (.pptx; .pptm; .potx; .potm; .ppam; .ppsx; .ppsm)"
                    }
                },
                {
                    "id": "node.1.8",
                    "props": {
                        "label": "Microsoft Office Word 2007 (.docx; .docm; .dotx; .dotm)"
                    }
                },
                {
                    "id": "node.1.9",
                    "props": {
                        "label": "Microsoft Office Visio 2013 (.vsdx; .vssx; .vstx; .vsdm; .vssm; .vstm)"
                    }
                },
                {
                    "id": "node.1.10",
                    "props": {
                        "label": "Microsoft OLE (.doc - Word 6.0-2003; .dot; .vss; .shs)"
                    }
                },
                {
                    "id": "node.1.11",
                    "props": {
                        "label": "Microsoft PowerPoint (.pps; .ppt)"
                    }
                },
                {
                    "id": "node.1.12",
                    "props": {
                        "label": "Microsoft Project (.mpp)"
                    }
                },
                {
                    "id": "node.1.13",
                    "props": {
                        "label": "Microsoft Rich Text Format (.rtf)"
                    }
                },
                {
                    "id": "node.1.14",
                    "props": {
                        "label": "Microsoft WORD/DOS 4.0/5.0 (.wri; .doc)"
                    }
                },
                {
                    "id": "node.1.15",
                    "props": {
                        "label": "Microsoft Help (.hlp)"
                    }
                },
                {
                    "id": "node.1.16",
                    "props": {
                        "label": "MSFT"
                    }
                },
                {
                    "id": "node.1.17",
                    "props": {
                        "label": "WordPerfect (.wp)"
                    }
                }
            ]
        },
        {
            "id": "node.2",
            "props": {
                "label": "Images"
            },
            "children": [
                {
                    "id": "node.2.0",
                    "props": {
                        "label": "Compuserve GIF (.gif)"
                    }
                },
                {
                    "id": "node.2.1",
                    "props": {
                        "label": "Corel PhotoPaint Image (.cpt)"
                    }
                },
                {
                    "id": "node.2.2",
                    "props": {
                        "label": "Corel Global Macro Storage (.gms)"
                    }
                },
                {
                    "id": "node.2.3",
                    "props": {
                        "label": "JPEG image (.jpg; .jpeg; .jpe)"
                    }
                },
                {
                    "id": "node.2.4",
                    "props": {
                        "label": "Macintosh MacPaint graphic (.mac)"
                    }
                },
                {
                    "id": "node.2.5",
                    "props": {
                        "label": "Portable Network Graphics (.png)"
                    }
                },
                {
                    "id": "node.2.6",
                    "props": {
                        "label": "Tagged image format (.tiff)"
                    }
                },
                {
                    "id": "node.2.7",
                    "props": {
                        "label": "Windows/ OS/2 Bitmap (.bmp)"
                    }
                },
                {
                    "id": "node.2.8",
                    "props": {
                        "label": "Windows metafile (.wmf)"
                    }
                }
            ]
        },
        {
            "id": "node.3",
            "props": {
                "label": "Video"
            },
            "children": [
                {
                    "id": "node.3.0",
                    "props": {
                        "label": "Advanced Streaming Format (.asf; .wmv)"
                    }
                },
                {
                    "id": "node.3.1",
                    "props": {
                        "label": "Macromedia Flash (.swf)"
                    }
                },
                {
                    "id": "node.3.2",
                    "props": {
                        "label": "Moving Picture Experts Group Video (.mpg; .mpeg)"
                    }
                },
                {
                    "id": "node.3.3",
                    "props": {
                        "label": "Audio Video Interleave Format (.avi)"
                    }
                },
                {
                    "id": "node.3.4",
                    "props": {
                        "label": "Quicktime Movie (.mov; .qt; .qtm)"
                    }
                },
                {
                    "id": "node.3.5",
                    "props": {
                        "label": "Real Media (.rm)"
                    }
                },
                {
                    "id": "node.3.6",
                    "props": {
                        "label": "Macromedia Flash Video (.flv)"
                    }
                }
            ]
        },
        {
            "id": "node.4",
            "props": {
                "label": "Sound"
            },
            "children": [
                {
                    "id": "node.4.0",
                    "props": {
                        "label": "Musical Instrument Digital Interface (.mid)"
                    }
                },
                {
                    "id": "node.4.1",
                    "props": {
                        "label": "MPEG Audio Layer 3 (.mp3)"
                    }
                },
                {
                    "id": "node.4.2",
                    "props": {
                        "label": "Real Audio (.ra; .ram)"
                    }
                },
                {
                    "id": "node.4.3",
                    "props": {
                        "label": "Waveform Audio Format (.wav)"
                    }
                }
            ]
        },
        {
            "id": "node.5",
            "props": {
                "label": "Compressed files"
            },
            "children": [
                {
                    "id": "node.5.0",
                    "props": {
                        "label": "Archive created by LHA (.lzh)"
                    }
                },
                {
                    "id": "node.5.1",
                    "props": {
                        "label": "Archive created by Pkzip (.zip)"
                    }
                },
                {
                    "id": "node.5.2",
                    "props": {
                        "label": "Archive created by RAR (.rar)"
                    }
                },
                {
                    "id": "node.5.3",
                    "props": {
                        "label": "Archive created by Tar (.tar)"
                    }
                },
                {
                    "id": "node.5.4",
                    "props": {
                        "label": "ARJ Compressed archive (.arj)"
                    }
                },
                {
                    "id": "node.5.5",
                    "props": {
                        "label": "BINHEX (.hqx)"
                    }
                },
                {
                    "id": "node.5.6",
                    "props": {
                        "label": "GNU Zip (.gz; .gzip)"
                    }
                },
                {
                    "id": "node.5.7",
                    "props": {
                        "label": "LZW/Compressed 16bits (.Z)"
                    }
                },
                {
                    "id": "node.5.8",
                    "props": {
                        "label": "MacBinary (.bin)"
                    }
                },
                {
                    "id": "node.5.9",
                    "props": {
                        "label": "Microsoft Cabinet (.cab)"
                    }
                },
                {
                    "id": "node.5.10",
                    "props": {
                        "label": "Microsoft Compressed/MSCOMP"
                    }
                },
                {
                    "id": "node.5.11",
                    "props": {
                        "label": "MIME (.eml; .mht)"
                    }
                },
                {
                    "id": "node.5.12",
                    "props": {
                        "label": "Teledisk format (.td0)"
                    }
                },
                {
                    "id": "node.5.13",
                    "props": {
                        "label": "Unix BZ2 Bzip compressed file (.bz2)"
                    }
                },
                {
                    "id": "node.5.14",
                    "props": {
                        "label": "UUEncode (.uu)"
                    }
                },
                {
                    "id": "node.5.15",
                    "props": {
                        "label": "WinAce (.ace)"
                    }
                }
            ]
        }
    ]
}

export default DataAnalysis

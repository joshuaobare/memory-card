import { Dialog, DialogContent } from "@mui/material";
import {Close} from "@mui/icons-material"

export default function EndGame(props) {
    return (
        <div className="Endgame">
            <Dialog open={props.dialogOpen}>
                <DialogContent>
                <div className="game-end">
                    <div>Game Over! You Win</div>
                    <div onClick={props.dialogToggle} className="close-icon"><Close /></div>                    
                </div>
                </DialogContent>
                
                
            </Dialog>
        </div>
    )
}
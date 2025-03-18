
const express = require('express')
import {handler2406} from "./handler2406";
const app = express()
app.get('/2406', handler2406)
app.listen(3000, () => {})
        
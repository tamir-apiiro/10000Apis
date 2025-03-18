
const express = require('express')
import {handler96} from "./handler96";
const app = express()
app.get('/96', handler96)
app.listen(3000, () => {})
        
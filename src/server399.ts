
const express = require('express')
import {handler399} from "./handler399";
const app = express()
app.get('/399', handler399)
app.listen(3000, () => {})
        
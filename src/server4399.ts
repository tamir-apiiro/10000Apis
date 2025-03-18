
const express = require('express')
import {handler4399} from "./handler4399";
const app = express()
app.get('/4399', handler4399)
app.listen(3000, () => {})
        
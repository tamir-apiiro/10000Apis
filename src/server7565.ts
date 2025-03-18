
const express = require('express')
import {handler7565} from "./handler7565";
const app = express()
app.get('/7565', handler7565)
app.listen(3000, () => {})
        
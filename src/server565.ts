
const express = require('express')
import {handler565} from "./handler565";
const app = express()
app.get('/565', handler565)
app.listen(3000, () => {})
        
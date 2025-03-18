
const express = require('express')
import {handler7059} from "./handler7059";
const app = express()
app.get('/7059', handler7059)
app.listen(3000, () => {})
        
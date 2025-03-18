
const express = require('express')
import {handler7334} from "./handler7334";
const app = express()
app.get('/7334', handler7334)
app.listen(3000, () => {})
        
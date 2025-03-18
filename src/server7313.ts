
const express = require('express')
import {handler7313} from "./handler7313";
const app = express()
app.get('/7313', handler7313)
app.listen(3000, () => {})
        
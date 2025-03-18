
const express = require('express')
import {handler9064} from "./handler9064";
const app = express()
app.get('/9064', handler9064)
app.listen(3000, () => {})
        
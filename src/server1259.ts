
const express = require('express')
import {handler1259} from "./handler1259";
const app = express()
app.get('/1259', handler1259)
app.listen(3000, () => {})
        
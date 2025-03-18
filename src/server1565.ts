
const express = require('express')
import {handler1565} from "./handler1565";
const app = express()
app.get('/1565', handler1565)
app.listen(3000, () => {})
        
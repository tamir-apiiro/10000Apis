
const express = require('express')
import {handler1291} from "./handler1291";
const app = express()
app.get('/1291', handler1291)
app.listen(3000, () => {})
        
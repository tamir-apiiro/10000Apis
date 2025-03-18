
const express = require('express')
import {handler1373} from "./handler1373";
const app = express()
app.get('/1373', handler1373)
app.listen(3000, () => {})
        
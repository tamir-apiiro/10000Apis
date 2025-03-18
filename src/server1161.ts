
const express = require('express')
import {handler1161} from "./handler1161";
const app = express()
app.get('/1161', handler1161)
app.listen(3000, () => {})
        
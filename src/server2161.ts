
const express = require('express')
import {handler2161} from "./handler2161";
const app = express()
app.get('/2161', handler2161)
app.listen(3000, () => {})
        

const express = require('express')
import {handler1296} from "./handler1296";
const app = express()
app.get('/1296', handler1296)
app.listen(3000, () => {})
        

const express = require('express')
import {handler1617} from "./handler1617";
const app = express()
app.get('/1617', handler1617)
app.listen(3000, () => {})
        
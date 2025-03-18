
const express = require('express')
import {handler1863} from "./handler1863";
const app = express()
app.get('/1863', handler1863)
app.listen(3000, () => {})
        
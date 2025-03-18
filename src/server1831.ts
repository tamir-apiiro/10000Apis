
const express = require('express')
import {handler1831} from "./handler1831";
const app = express()
app.get('/1831', handler1831)
app.listen(3000, () => {})
        
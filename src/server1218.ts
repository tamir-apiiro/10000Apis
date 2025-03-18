
const express = require('express')
import {handler1218} from "./handler1218";
const app = express()
app.get('/1218', handler1218)
app.listen(3000, () => {})
        
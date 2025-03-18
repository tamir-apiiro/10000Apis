
const express = require('express')
import {handler1873} from "./handler1873";
const app = express()
app.get('/1873', handler1873)
app.listen(3000, () => {})
        
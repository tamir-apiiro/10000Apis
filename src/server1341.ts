
const express = require('express')
import {handler1341} from "./handler1341";
const app = express()
app.get('/1341', handler1341)
app.listen(3000, () => {})
        
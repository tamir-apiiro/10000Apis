
const express = require('express')
import {handler1827} from "./handler1827";
const app = express()
app.get('/1827', handler1827)
app.listen(3000, () => {})
        
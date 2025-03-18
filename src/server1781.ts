
const express = require('express')
import {handler1781} from "./handler1781";
const app = express()
app.get('/1781', handler1781)
app.listen(3000, () => {})
        
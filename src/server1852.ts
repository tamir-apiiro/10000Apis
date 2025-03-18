
const express = require('express')
import {handler1852} from "./handler1852";
const app = express()
app.get('/1852', handler1852)
app.listen(3000, () => {})
        
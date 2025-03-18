
const express = require('express')
import {handler1712} from "./handler1712";
const app = express()
app.get('/1712', handler1712)
app.listen(3000, () => {})
        
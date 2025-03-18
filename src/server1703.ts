
const express = require('express')
import {handler1703} from "./handler1703";
const app = express()
app.get('/1703', handler1703)
app.listen(3000, () => {})
        
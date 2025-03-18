
const express = require('express')
import {handler1654} from "./handler1654";
const app = express()
app.get('/1654', handler1654)
app.listen(3000, () => {})
        
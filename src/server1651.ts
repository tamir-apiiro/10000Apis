
const express = require('express')
import {handler1651} from "./handler1651";
const app = express()
app.get('/1651', handler1651)
app.listen(3000, () => {})
        
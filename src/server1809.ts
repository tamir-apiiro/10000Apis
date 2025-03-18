
const express = require('express')
import {handler1809} from "./handler1809";
const app = express()
app.get('/1809', handler1809)
app.listen(3000, () => {})
        
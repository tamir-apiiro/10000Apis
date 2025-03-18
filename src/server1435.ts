
const express = require('express')
import {handler1435} from "./handler1435";
const app = express()
app.get('/1435', handler1435)
app.listen(3000, () => {})
        
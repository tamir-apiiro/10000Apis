
const express = require('express')
import {handler1672} from "./handler1672";
const app = express()
app.get('/1672', handler1672)
app.listen(3000, () => {})
        
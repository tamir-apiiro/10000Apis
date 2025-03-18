
const express = require('express')
import {handler1722} from "./handler1722";
const app = express()
app.get('/1722', handler1722)
app.listen(3000, () => {})
        
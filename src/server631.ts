
const express = require('express')
import {handler631} from "./handler631";
const app = express()
app.get('/631', handler631)
app.listen(3000, () => {})
        

const express = require('express')
import {handler2351} from "./handler2351";
const app = express()
app.get('/2351', handler2351)
app.listen(3000, () => {})
        
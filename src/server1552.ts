
const express = require('express')
import {handler1552} from "./handler1552";
const app = express()
app.get('/1552', handler1552)
app.listen(3000, () => {})
        
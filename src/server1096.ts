
const express = require('express')
import {handler1096} from "./handler1096";
const app = express()
app.get('/1096', handler1096)
app.listen(3000, () => {})
        
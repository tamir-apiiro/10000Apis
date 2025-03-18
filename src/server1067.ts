
const express = require('express')
import {handler1067} from "./handler1067";
const app = express()
app.get('/1067', handler1067)
app.listen(3000, () => {})
        
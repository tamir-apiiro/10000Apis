
const express = require('express')
import {handler1164} from "./handler1164";
const app = express()
app.get('/1164', handler1164)
app.listen(3000, () => {})
        
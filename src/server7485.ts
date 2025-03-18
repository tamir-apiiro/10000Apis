
const express = require('express')
import {handler7485} from "./handler7485";
const app = express()
app.get('/7485', handler7485)
app.listen(3000, () => {})
        
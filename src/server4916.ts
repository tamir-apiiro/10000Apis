
const express = require('express')
import {handler4916} from "./handler4916";
const app = express()
app.get('/4916', handler4916)
app.listen(3000, () => {})
        
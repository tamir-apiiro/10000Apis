
const express = require('express')
import {handler4096} from "./handler4096";
const app = express()
app.get('/4096', handler4096)
app.listen(3000, () => {})
        
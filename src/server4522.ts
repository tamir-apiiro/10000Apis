
const express = require('express')
import {handler4522} from "./handler4522";
const app = express()
app.get('/4522', handler4522)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4570} from "./handler4570";
const app = express()
app.get('/4570', handler4570)
app.listen(3000, () => {})
        
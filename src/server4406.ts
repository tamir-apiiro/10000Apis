
const express = require('express')
import {handler4406} from "./handler4406";
const app = express()
app.get('/4406', handler4406)
app.listen(3000, () => {})
        
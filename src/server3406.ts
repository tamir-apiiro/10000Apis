
const express = require('express')
import {handler3406} from "./handler3406";
const app = express()
app.get('/3406', handler3406)
app.listen(3000, () => {})
        
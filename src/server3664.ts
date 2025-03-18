
const express = require('express')
import {handler3664} from "./handler3664";
const app = express()
app.get('/3664', handler3664)
app.listen(3000, () => {})
        
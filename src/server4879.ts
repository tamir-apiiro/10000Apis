
const express = require('express')
import {handler4879} from "./handler4879";
const app = express()
app.get('/4879', handler4879)
app.listen(3000, () => {})
        
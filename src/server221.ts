
const express = require('express')
import {handler221} from "./handler221";
const app = express()
app.get('/221', handler221)
app.listen(3000, () => {})
        
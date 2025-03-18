
const express = require('express')
import {handler21} from "./handler21";
const app = express()
app.get('/21', handler21)
app.listen(3000, () => {})
        